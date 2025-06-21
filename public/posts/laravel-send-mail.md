# Laravel Send Email Using Mailable Classes

I recently learned how to send emails in Laravel using Mailable classes, so I wanted to share a simple walkthrough — partly as a note to myself, and maybe it’ll help someone else too. This includes how I created the Mailable, configured the sender, and added some basic dynamic content.

---

## 1. Create a Mailable

First, generate a new Mailable class:

```bash
php artisan make:mail JobPosted --markdown=mail.job-posted
```

![Terminal](/images/laravel-send-mail/1.png)

This will create:

`app/Mail/JobPosted.php` (the Mailable class)

`resources/views/mail/job-posted.blade.php` (the email content view)

---

## 2. Define the Envelope

Inside `JobPosted.php`, define the subject and sender using the `envelope()` method:

![JobPosted](/images/laravel-send-mail/2.png)


```php
public function envelope(): Envelope
{
    return new Envelope(
        subject: 'Job Posted',
        from: new Address('admin@garyblog.com', 'Admin Bot'),
    );
}
```

> If `from:` is set in `envelope()`, it will override the `.env` settings.

---

## 3. Define the Email Content

Tell Laravel which Blade/Markdown view to use:

```php
public function content(): Content
{
    return new Content(
        markdown: 'mail.job-posted',
    );
}
```

---

## 4. (Optional) Define Attachments

If you want to attach files:

```php
public function attachments(): array
{
    return [
        // e.g. Attachment::fromPath('path/to/file.pdf')
    ];
}
```

---

## 5. Configure Email Settings

You have 2 options to configure:

In `.env`:

```env
MAIL_FROM_ADDRESS="info@garyblog.com"
MAIL_FROM_NAME="Gary Fung"
```

In `config/mail.php`:

```php
'from' => [
    'address' => env('MAIL_FROM_ADDRESS', 'info@garyblog.com'),
    'name' => env('MAIL_FROM_NAME', 'Gary Fung'),
],
```

> You can also override the sender directly in `envelope()` as shown above.

---

## 6. Test Email Rendering in Browser

To preview email layout:

```php
// routes/web.php
Route::get('test', function() {
    return new \App\Mail\JobPosted();
});
```

Go to `/test` in your browser.

---


![TestMail](/images/laravel-send-mail/3.png)

## 7. Use Mailtrap for Testing

Sign up at [Mailtrap](https://mailtrap.io/) and copy the Laravel config snippet. Paste it into your `.env`:

```env
MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
MAIL_FROM_ADDRESS="info@garyblog.com"
MAIL_FROM_NAME="Gary Fung"
```

---

## 8. Send a Test Email

```php
Route::get('test-send', function () {
    Mail::to('abc@gmail.com')->send(
        new \App\Mail\JobPosted()
    );
    return 'Done';
});
```

![MailBox1](/images/laravel-send-mail/4.png)

---

## 9. Dynamic Email Content

Pass dynamic content to the Mailable:

### Mailable constructor:
```php
public function __construct(public Job $job) {}
```

### Blade view (resources/views/mail/job-posted.blade.php):
```blade
<h2>{{ $job->title }}</h2>
<p>Congrats! Your job is now live on our website</p>
<p><a href="{{ url('/jobs/' . $job->id) }}">View Your Job Listing</a></p>
```

### Controller logic:

In my case, I can go to JobController.php (I’ve already set up the Eloquent relationship between Job and Employer).

Laravel is smart enough — even if we don’t explicitly provide the email, it can still retrieve it automatically.

```php
Mail::to($job->employer->user->email)->queue(
    new JobPosted($job)
);
```

---

## 10. Full Controller Example

```php
public function store()
{
    request()->validate([
        'title' => ['required', 'min:3'],
        'salary' => ['required'],
    ]);

    $job = Job::create([
        'title' => request('title'),
        'salary' => request('salary'),
        'employer_id' => 1, // hardcoded for now
    ]);

    Mail::to($job->employer->user)->queue(
        new JobPosted($job)
    );

    return redirect('/jobs');
}
```

![CreateJob](/images/laravel-send-mail/5.png)

![MailBox2](/images/laravel-send-mail/6.png)

---

## Summary

Use `envelope()` to override email subject/from.

Use `content()` to link to Markdown Blade views.

Use Mailtrap to simulate mail delivery.

Dynamic content is passed via constructor and displayed in Blade.

---

## Next Steps

Integrate real mail service (Mailgun, SES, etc.)

Add attachment logic if needed

Queue mail for better performance (already using `->queue()`)



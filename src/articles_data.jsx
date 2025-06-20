import LaravelImg from "./images/article/0_oUyjZH6_leRq64sQ.png"
import LaravelMailImg from "./images/article/Laravel_mail.png"
import Welcome from "./images/article/welcome.png"

export default [
  {
    slug: "hello-world",
    title: "Testing Article",
    excerpt: "hello-world hello-world hello-world hello-world hello-world hello-world hello-world",
    readTime: "4 min read",
    date: "31 Mar 2025",
    tags: ["test", "hello-world", "programming"],
    coverImg: LaravelImg,
    published: false
  },
    {
    slug: "laravel-send-mail",
    title: "How to Send Mail in Laravel",
    excerpt: "Learn how to send emails using Laravel's Mailable classes, from setup and configuration to dynamic content and Mailtrap testing.",
    readTime: "5 min read",
    date: "1 June 2025",
    tags: ["Laravel", "Mail", "Mailable", "Queue", "Mailtrap"],
    coverImg: LaravelImg,
    published: true
    },
    {
    slug: "welcome-intro",
    title: "A Note from Me",
    excerpt: "A short personal note on why I started this site.",
    readTime: "2 min read",
    date: "4 Apr 2023",
    tags: ["intro", "personal"],
    coverImg: Welcome,
    published: true
    }

]

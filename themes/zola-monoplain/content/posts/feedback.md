+++
title = "Feedback"
description = "Feedback E-Mail for Monoplain Theme"
date = 2025-06-17
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Feedback", "E-Mail", "Zola", "Theme", "Markdown", "SSG", "Static Site Generator"]
+++

## Introduction

This is the feedback page for the Monoplain Theme. If you have any feedback, suggestions, or issues with the theme, please feel free to reach out.

> Ok this is not a real feedback page, but it reviews the feedback E-Mail address feature of the Monoplain Theme.

Why? Because Feedback is important! And the Monoplain Theme has no comment section yet, so the only way to give feedback is via E-Mail.

## Configuration

You can configure the feedback E-Mail address in the `config.toml` file of your Zola site. The following configuration options are available:

```yaml
[translations]
post_feedback_email_link_title = "This email address has been obscured for security. Please click the link to reveal the actual address."
post_feedback_email_text = "Have thoughts or experiences you'd like to share? I'd love to hear from you! Whether you agree, disagree, or have a different perspective, your feedback is always welcome. Drop me an email and let's start a conversation."
post_feedback_email_title = "Feedback"

[extra]
# feedback
feedback_email_enabled = true
feedback_email_address = { local_part = "monoplain", domain_name = "0x38", tld = "de" }
feedback_email_address_wildcard = true
feedback_email_address_wildcard_postfix = ".monoplain"
```

By default the feedback email is enabled for all posts.
You can disable it for specific posts by setting `feedback_email_enabled = false` in the post's front matter.
You can also customize the text and title of the feedback email link by modifying the `translations` section in your `config.toml` file.
There is also a `feedback_email_address_wildcard` option that allows you to use a wildcard for the email address. This is useful if you want to use a different email address for each post. And you can set a postfix for the email address with `feedback_email_address_wildcard_postfix`.

Fully configured, the feedback email link will look like this:

```yaml
feedback_email_address = { local_part = "blog", domain_name = "example", tld = "org" }
feedback_email_address_wildcard = true
feedback_email_address_wildcard_postfix = ".blog-post"
```

This will result in the email address `feedback.blog-post@example.org` for the current page.

## Example

See next section for an example of the feedback email link in action.

+++
title = "Feedback"
description = "Feedback Email for mono/plain theme"
date = 2025-06-17
updated = 2026-07-12
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Feedback", "E-Mail", "Zola", "Theme", "Markdown", "SSG", "Static Site Generator"]
+++

## Introduction

This post explains the feedback email feature in the mono/plain theme.

> This is not a live feedback form. It documents how the feedback email setup works.

Feedback matters. Since the theme currently has no built-in comment section, email is the default feedback channel.

## Configuration

You can configure the feedback email address in your site `config.toml`. The following options are available:

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

By default the feedback email block is controlled globally via `config.extra.feedback_email_enabled`.
Per-post toggling is not implemented in the current templates.
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

## Template Macro

The feedback component now uses a reusable Tera macro called `obfuscate_mail` from `templates/macros/email.html`.

```md
{{/* email::obfuscate_mail(
  local_part=local_part,
  domain_name=config.extra.feedback_email_address.domain_name,
  tld=config.extra.feedback_email_address.tld,
  title=trans(key="post_feedback_email_link_title")
) */}}
```

This keeps the obfuscation logic in one place and makes reuse in other templates easier.

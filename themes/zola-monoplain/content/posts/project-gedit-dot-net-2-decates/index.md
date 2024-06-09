+++
title = "My abandoned blog is nearly 2 decades old"
date = 2024-01-01
[taxonomies]
tags = ["blog", "abandoned", "gedit", "review"]
[extra]
images = ["gedit-weblog-last-post.png", "gedit-article-last-post.png", "gedit-landingpage.png", "gedit-redesign.png"]
+++

## Introduction

[gedit.net](http://gedit.net) is my first personal blog.
About web development and web design.
In 2003 I published my first article.
In 2011 was my last post.
After 2011 I lost interest in the blog and abandoned it.
In 2023 I decided to archive the blog.
In 2024 I decided to write this post.

In this post I will review my self, the blog and its content and the technology behind it.

{{ image(src="gedit-landingpage.png", alt="gedit.net landingpage") }}

I started the blog for the following reasons:

- reflect my dive into web development and web design
- learn and test new things (SEO, HTML, CSS, JavaScript, PERL, SSI, PHP, CMS, etc.)
- share my knowledge (and get feedback)

It was not because of writing, because I write all the time. It was more about publishing and write for others.

Summaries were and are my go-to tool to reflect and learn new things. I got into this while I was in secondary school and perfected it during my Abitur.

I also shared summaries with others, because I thought it would be interesting for them too. And I got feedback from them. And I learned from them.

But, consuming shared summaries is kind of copy the homework of someone else.
As reader, you don't learn as much as the writer. It's more like a shortcut to the knowledge of the writer.

So these days, I don't share summaries any more. I share links to interesting articles and tools. And I write about what I learn and what I do. And I share examples and code. Summaries are still a thing for me. But I don't share them any more as I did in the past. I share them as a Readme.md in a GitHub repository and do not try to make them perfect.

Same with how-tos and tutorials.

## Short history

Before the actual version 0.5 of the blog, I had a version [v0.1](https://archiv.gedit.net/VERSION_v0.1.html) that had a Design like a [MS-DOS Editor](https://en.wikipedia.org/wiki/MS-DOS_Editor), made with Photoshop and ImageReady. It use CSS 2.0, iframes and a fixed positioned layout.

Version [v0.2](https://archiv.gedit.net/VERSION_v0.2.html) was my first own design.

[v0.3](https://archiv.gedit.net/VERSION_v0.3.html) was the first version that was developed without using ImageReady Slices. First use of CSS 3.0. The v0.3 Design was inspired by [Le Corbusier Color System](https://www.lescouleurs.ch/en/the-colours/colour-system/).

In [v0.4](https://archiv.gedit.net/VERSION_v0.4.html) a lot of new technology got involved like SSI, CGI/PERL, blosxom Weblog and CSS 3, float layouts.

The last version from 2004 [v0.5](https://archiv.gedit.net/VERSION_v0.5.html) was a redesign and migration to phpSQLiteCMS. I also got more involved with Web Standards and Web Accessibility.

As you can see, I was much into design and technology.
From my perspective today, I should have focused more on the content and the writing.

## Most currious

From today's perspective, the following things are the most curious:

- It was quite hard for me to write in English, so I did it in German
- Writing in German was also hard, because I had high demands on myself
- Web standards and Accessibility was a thing for me
- Most article has examples and code
- My focus was a bit too much on the design and technology
- Still listen to Pink Floyd
- Every article is a how-to or tutorial (no opinion or review)
- I wrote about HTML 5 in 2011
- Still use content like HTML entities, RGB colors and font stacks
- I used a lot of different technology

{{ image(src="gedit-redesign.png", alt="gedit.net redesign") }}
[^redesign-v0.6] Screenshot of Redesign v0.6 in Photoshop (never finished) from 2010

## More currious

- A website with basically no JavaScript
- It support IE 6, 7 and 8
- No CSS or JavaScript framework
- I used Opera as my main browser (that one with the [Presto Engine](<https://en.wikipedia.org/wiki/Presto_(browser_engine)>))
- [SCiTe](https://www.scintilla.org/SciTE.html) was my Text Editor of choice
- AddType application/x-httpd-php .css
- No Mobile Support
- I decided to use HTML 4.01 over of XHTML 1.0

## Why I abandoned the blog?

In 2007 I got my first Jobs as System Administrator and Developer.
I was working on a lot of different projects.
I was learning a lot of new things.
And I was still working on my own projects.

At work, I wrote a lot of technical documentation and how-tos. So, I did not feel the need to write for my blog.

And my own projects grow very slowly. I finished some of them (The redesign v0.6[^redesign-v0.6] was none of them). And I forgot to share my knowledge in my blog. Instead, I used Twitter to share links to interesting articles and tools. And GitHub to share examples, code, tools, and projects. Or Gists to document and share examples and how-tos.

## Why I archived the blog?

In 2023 I decided to archive the blog.
I was not sure if I should delete it or archive it.
I decided to archive it.
Because I think it is still interesting to see how I started with web development and web design.
And it is interesting to see how the web evolved in the last 2 decades.

Isn't it stonning that 20 year old Markup and CSS still works today?
And look like it should look like?

Also, I think it is interesting to see how I evolved as a developer.
And last but not least, one of my goals 2023 was to get re-engaged with writing.
So I started this blog.
And I thought it would be a good idea to write about the blog and the technology behind it.

## 20-Year-old technology

- HTML 4.01 (not XHTML 1.0)
- CSS 2.1 (CSS 3 was a draft)
- WCAG 1.0 (WCAG 2.0 was published in January 2001)
- PHP 5.2 (CMS)
- SQLite 2 (Database version that is not supported any more)
- Smarty (Template engine)
- Pound 2 (Reverse Proxy with SSL termination)
- Varnish 2 (Reverse Proxy with caching and filtering)
- Apache 2 (Webserver)
- Nginx (Webserver for static files)
- thttp (Webserver for static files)
- Debian 6 (Squeeze) (OS)
- VPS (Hosting)

**HTML5** was not a thing yet. XHTML 1.0 was around the corner. But i decided to use HTML 4.01. I don't know why. Maybe because I validated it any way and used the strict mode. And I remember that I played at the time with custom document types. I also remember that I was not sure if I could use them with XHTML 1.0. So I decided to use HTML 4.01.

**CSS3** was a draft. But most of the CSS 3.0 features were support by major browsers at that time. So I used it.

**WCAG** 2.0 was published in January 2001. I used WCAG 1.0. I don't know why. Maybe because a Validator existed.

**PHP** 5.2 was the current version. I used phpSQLiteCMS 2.0.4[^1]. The project is abandoned since 2009.

**SQLite2** was the supported version by phpSQLiteCMS. I used it because it was easy to use, and I did not need a database server. Also, it is easy to back up. But, recently I had to migrate the database to SQLite3. SQLite2 is not supported any more. I failed on doing that. And because I decided to archive the blog, I did not try it again. Parsing the database binary was easier for my use case.

**phpSQLiteCMS** was the first CMS I used. Written in PHP, good to understand and modify and slightly well documented. Also, I was able to adjust the data-structure to my needs. I was not aware of other CMS like WordPress or Drupal at the time I started the blog.

Before phpSQLiteCMS I used [blosxom](https://blosxom.sourceforge.net/). blosxom is a weblog Software written in Perl with a file-based database. I used it because it was also easy to use but the templating was not that easy. I used it for a short time. Templating with phpSQLiteCMS was much easier and faster because of the use of Smarty Template Engine.

**Pound** as a reverse proxy with SSL termination. I used it because I want to use Varnish as a cache and filter. Varnish does not support SSL termination. So I used Pound as a reverse proxy with SSL termination. Also, SSL was not that much of a thing at the time. I used it because I wanted to learn more about it.

**Varnish** is a caching HTTP proxy. I wanted to learn more about caching and filtering and reverse proxies in general. To be honest, there was no reason to use Varnish. The blog was not that big and did not need caching or filtering. I run out of RAM multiple times. But I wanted to learn more about it. For example I used Varnish to cache dynamic files. Add or removed Headers and switching backends for static files like CSS and JavaScript, based on the mime, file-extension.

I remember that I was also playing around with HAProxy and Squid at the time. In the end I decided to use Pound + Varnish because it was easier to configure in my use case.

**Apache2** as HTTP-Server with PHP-FPM/FCGI. To serve all .php files. And I wanted to learn more about it. I also used it because I wanted to learn more about mod_rewrite and .htaccess files etc.

The same for **Nginx** and **thttp**. I used both to serve static files.
I remember that I was also playing around with Boa, lighttpd, Hiawatha and Cherokee at the time. In the end I decided to use Nginx and thttp and more later only Nginx because it was easier to configure in my use case.

**Debian** 5 (Lenny) was the current version in the beginning. I used it because I wanted to learn more about it (especially as Server OS). Also, I used it because I wanted to learn more about Linux Server, Security and Administration in general. As Desktop OS I use Linux since 2003. Since 2009 Debian as my preferred Server OS. With view exceptions where I use OpenBSD (for DNS) or CentOS because of the Software I had to use. Please note that Debian Lenny released in 2009. Before 2009, the website run on a Dedicated Server with Gentoo Linux (system administration not done by myself).

**VPS** as Hosting. I used a VPS because I wanted to learn more about it. The VPS was from [HostEurope](https://www.hosteurope.de/). It was my first own VPS. I used it because it was cheap (at first, then I had to update my plans multiple times because I run out of RAM) and I wanted to learn more about it. I also used it because I wanted to learn more about DNS, Mail, FTP, SSH, etc.
A dedicated Server was too expensive for me at the time. And I did not need that many resources.

## What content did I create?

My choice on the content was to write about what I learn and what I do. In form of tutorials and how-tos. Also, there was a Weblog where I shared links to interesting articles and tools.

Beside the Weblog and the Article section, I also created a Tools section. I created some tools for the blog. Like a font stack generator, RGB color picker and HTML entity picker. Most of these tools I use still today from time to time.

## What content is still relevant today?

I think articles that covers and illustrates basics. For example: CSS font-sizes and line-heights.
And the tools I created for the blog.

Article about outdated Frameworks and Software are not that relevant any more. For example: SSI, PHP, phpSQLiteCMS, Smarty, etc.

In general, non-English content, is not very inclusive. And it was a mistake to write in German. I should have written in English.

## What I learned about publishing in a blog?

From my perspective today, I learned a lot of things while I published in the blog. I will try to list the most important ones:

- it is **better** to write a post then to change the software of your blog
- be sure what you want to achieve to **focus** on the right things
- it is **possible** to use the same technology for 20 years
- **start** small and simple and grow from there to not get lost in details
- **ship** fast and often to get feedback
- it is not important to **finish** a project to write about it
- perfect is the enemy of **good** and **done**
- **try** out new things to learn new things, even if you don't need them

## What I would do different today?

If I could talk to my younger self, I would tell him the following:

- you should **start** writing while you learn new things before you forget them
- each post should have a date, because a date give the reader an idea of the context and the **relevance** of the content
- write about **everything** not only a specific topic because it is your personal blog
- the blog must be **independent** of the learning platform because the learning platform will change
- the content must be **independent** of the technology because the technology will change
- the content must be **independent** of the design because the design will change
- use Markdown or any other simple markup language or whatever you want that makes writing **easy** and fast and focus on the content
- use a language that is easy to **understand** and write for you and others (e.g., English)

## My personal takeaways

Personally, I stick to the following takeaways:

- write about what you do to **reflect** it, and you will remember it and understand it better
- examples should be simple and easy to **understand** for you and others to prof that you understand it
- examples should work because it is frustrating if they don't, and it will harm your **reputation**
- it is easy to **find** things to learn if you read everything you find interesting
- it is easy to find **topics** to write about, if you document everything you learn
- **share** good things you find on the web to remember them because you will be the other person tomorrow that will search for it

## Conclusion

I think it was a good idea to archive the blog.
It was interesting to see how I started publishing.

And it was interesting to see how the web evolved in the last 2 decades.

Also, I think it was interesting to see how I evolved as a developer and as a person. And my perspective continued or changed over time.

Writing and sharing is still as important for me as it was 20 years ago.

## Research

Before I archived the blog, I did some research. I wanted to know how many articles I wrote, how many posts I published and when I published them.

### History

The [last Weblog post](http://gedit.net/Weblog) is from 2011-04-03 and links the HTML 5 Editor draft

{{ image(src="gedit-weblog-last-post.png", alt="gedit.net last post") }}

The [last Article post](http://gedit.net/Artikel;Free_HTML-CSS_Templates_viCard_und_Helvetica) is from 2009 and offers two free HTML templates for personal sites. My personal was running on the second one (Helvetica) until 2020.

{{ image(src="gedit-article-last-post.png", alt="gedit.net last article") }}

The installation of the current running blog was in 2008 (moved from VPS a to VPS b).

```bash
$ find . -type f -printf '%T+ %p\n' | sort | head -n 1
2008-06-18+11:08:07.0000000000 ./sbin/config/db_settings.conf.php
```

Last config/code adjustment was 2014-10-21 (PHP Version upgrade).

```bash
$ find . -type f ! \( -name "*.cache" -o -name "*.sqlite" \) -printf '%T+ %p\n' | sort -r | head -n 1
2014-10-21+07:32:55.0000000000 ./sbin/includes/functions.inc.php
```

### Database

Get updates by date:

```bash
cat content.sqlite | grep -a -o -E '[0-9]{10}' | sort | uniq |awk '{ print strftime("%Y-%m-%d", $1)}' | sort | uniq
2004-12-19
2005-01-08
2005-01-12
2006-11-29
2006-12-17
2007-01-08
2008-06-09
2008-06-10
2008-06-29
2008-08-11
2008-08-17
2008-09-02
2008-09-03
2008-09-04
2008-09-05
2008-09-07
2008-09-17
2008-09-18
2008-09-19
2008-09-22
2008-09-23
2008-09-26
2008-09-27
2008-09-29
2008-10-03
2008-10-04
2008-10-05
2008-10-06
2008-10-07
2008-10-10
2008-10-11
2008-10-13
2008-10-14
2008-10-15
2008-10-16
2008-10-17
2008-10-18
2008-10-19
2008-10-21
2008-10-24
2008-10-25
2008-10-26
2008-10-30
2008-11-02
2008-11-05
2008-11-07
2008-11-08
2008-11-09
2008-11-11
2008-11-15
2008-11-18
2008-11-22
2008-11-26
2008-12-17
2009-02-20
2009-02-23
2009-02-28
2009-03-01
2009-03-23
2009-03-29
2009-03-31
2009-04-07
2009-04-11
2009-04-28
2009-06-08
2009-06-12
2009-06-16
2009-06-17
2009-06-19
2009-06-20
2009-06-21
2009-06-22
2009-06-24
2009-06-25
2009-07-03
2009-07-11
2009-07-12
2009-07-15
2009-07-16
2009-07-19
2009-07-20
2009-08-02
2009-08-03
2009-08-12
2009-08-16
2009-08-21
2009-09-22
2009-10-13
2009-10-23
2009-10-25
2009-10-26
2009-11-01
2009-11-04
2009-11-05
2009-11-27
2010-01-27
2010-02-07
2010-02-22
2010-03-12
2010-03-13
2010-03-17
2010-03-21
2010-03-25
2010-05-22
2010-05-23
2010-05-25
2010-05-29
2010-07-08
2010-07-14
2010-07-28
2010-11-24
2010-12-07
2011-01-18
2011-01-31
2011-04-03
2011-12-13
```

{{ details(title="Let's break down the command step by step:", content=`

1. cat content.sqlite: This reads the contents of the file named content.sqlite and sends it to the standard output stream.

2. grep -a -o -E '[0-9]{10}': The grep command searches for patterns ([0-9]{10} matches sequences of 10 digits) in the input text (-a treats the file as text, -o outputs only the matched parts, -E enables extended regular expressions).

3. sort: Sorts the output. In this case, it sorts the Unix timestamps in ascending order since no additional flags are specified.

4. uniq: Removes adjacent duplicate lines. It ensures that each timestamp appears only once in the sorted output.

5. awk '{ print strftime("%Y-%m-%d", $1)}': Uses awk to convert each Unix timestamp into a date in the format %Y-%m-%d (year-month-day).

6. Another sort: Sorts the dates again.

7. Another uniq: Removes adjacent duplicate dates, ensuring that each unique date appears only once in the final output.

8. This command sequence extracts Unix timestamps from the content.sqlite file, converts them into human-readable dates in the format %Y-%m-%d, sorts them, removes duplicate dates, and finally presents a list of unique dates sorted in ascending order.
   Shows all posts from 2004 to 2012. Because i did not find a proper tool to view SQLite2 databases, i had to parse the binary.

This command sequence extracts Unix timestamps from the content.sqlite file, converts them into human-readable dates in the format %Y-%m-%d, sorts them, removes duplicate dates, and finally presents a list of unique dates sorted in ascending order.
`)}}

Get Posts create/edit by date:

```bash
$ cat content.sqlite | grep -a -o -E '([0-9]{10})(.*)' | awk '!seen[$1]++ { print strftime("%Y-%m-%d", $1) " " substr($0, 11) }' | sed -E 's/<[^>]+>//g; s/[0-9]{10}//g' | sort
2004-12-19 ArtikelArtikel//gedit.NET - Artikel - Tutorials, Howtos und Artikel zu Themen wie HTML>
2004-12-19 ArtikelArtikelTutorials, Howtos und Artikel zu Themen wie HTML, CSS, XML, SVG, SEO, JaT
2004-12-19 Artikel - Advance CSS Server Side parsed mit PHPA
2004-12-19 Artikel - CSS Schriftgröße und ZeilenabstandArtiC
2004-12-19 Artikel - Druckvorschau - Cascading Style Sheet zum
2004-12-19 Artikel - Dynamische Webseiten mit SSI Templates
2004-12-19 Artikel - Elemente anzeigen und verbergen
2004-12-19 Artikel - Free HTML/CSS Templates viCard und
2004-12-19 Artikel - Javascript - externe Links in einem n
2004-12-19 Artikel - Javascript - externe Links in einem ndP
2004-12-19 Artikel - KVIrc Windows exec aliasArtikel - KVIrc Windows exec g
2004-12-19 Artikel - phpSQLiteCMS HTML Sitemap Smarty Temp
2004-12-19 Error - FehlerseiteError - FehlerseiteFehlerseite für Fehler wie 401, 403, 404 oder 500ge
2004-12-19 Galerie - Simon - ScreenshotsGalerie - Simon - Screen
2004-12-19 Kontaktieren Sie mich doch bei Frage, Anregungen und Kri
2004-12-19 Services//gedit.NET - Services und Tools für den remote Usergedit, Servicep
2004-12-19 Sitemap - InhaltsverzeichnisSitemap - Inhaltsverzeichnis//gedit.NET - Inhaltsverze
2004-12-19 Sitemap - InhaltsverzeichnisSitemap - InhaltsverzeichnisInhaltsverzeichnis und Sits
2004-12-19 Tools &amp; ServicesTools &amp; ServicesReferenzen und Tools wie HTML Farbräume, Fon
2004-12-19 Tutorials Webentwicklung mit standardisierten WebtechnikenTutorials
2004-12-19 WeblogWeblogEine Liste interessanter, lesenswerter und informativer Websites zu The5[
2005-01-08 Impressum - HaftungsausschlussImpressum - HaftungsausschlussImpressum und Haftungsaus
2005-01-08 Impressum und Haftungsausschluss - DatenschutzImpressum und Haftungsaussch
2005-01-08 Impressum und Haftungsausschluss - Verweise und LinksImpressum und
2005-01-08 SeitensucheSeitensucheHier finden Sie was Sie suchen auf gedit.gedit, Suche, Seitensuche,F
2005-01-08 Seitensuche - GoogleSeitensuche - GoogleBenutzen Sie Google um zu finden was Sie a
2005-01-08 Seitensuche - GoogleSeitensuche - Google//gedit.NET - Seitensuche - Benutzen Sie GH
2005-01-08 Seitensuche - Yahoo!Seitensuche - Yahoo!//gedit.NET - Seitensuche - Benutzen Sie Ya
2005-01-08 Simon Gattner - KontaktSimon Gattner - Kontakt//gedit.NET - Simon Gattner\'s pers`
2005-01-08 Simon Gattner - LesezeichenSimon Gattner - Lesezeichen//gedit.NET - Simon Gat
2005-01-08 &Uuml;ber gedit.NET&Uuml;ber gedit.NET//gedit.NET - Über gedit.NET - Konzepte, Umsetzung
2005-01-08 Who Am I - Remote User, Browser and Script InformationWho Am I - Remote User, Bro
2005-01-12 Creative Commons LicenseCreative Commons LicenseCreative Commons License 3.0 - Namensnennung
2005-01-12 GPLGNU GENERAL PUBLIC LICENSEGNU GENERAL PUBLIC LICENSE - Deutsche Übersetzung der Version
2005-01-12 VERSION 0.4VERSION 0.4//gedit.NET - VERSION HISTORY - &Auml;nderungen, Technik und=
2005-01-12 VERSION 0.5VERSION 0.5//gedit.NET - VERSION HISTORY -  &Auml;nderungen, Technik un
2005-01-12 VERSION HISTORYVERSION HISTORYVersion Historie von geditgedit, VERSION, HISTORY, HISTO
2006-11-29 gedit.NETgedit.NETgedit.NET - Really Simple Syndication - RSS 2.0 Feed
2006-11-29 XML Sitemap
2006-12-17 robots.txt
2008-08-17 blog.fefe.de
2008-09-03 dotfiles.org
2008-09-04 Advanced Apache und mod_rewrite Guide
2008-09-04 Fit f&uuml;r Usability
2008-09-05 www.iconlook.com
2008-09-07 BILDblog.
2008-09-17 I love typography
2008-09-18 Google - The Anatomy of a Large-Scale Hypertextual Web Search Engine
2008-09-19 blog.internet-briefing.ch
2008-09-22 gedit.NET Webloggedit.NET Webloggedit.NET - Weblog - Really Simple Syndicatic
2008-09-22 dev.opera.com
2008-09-23 Who Am I, Remote User Informations
2008-09-27 Sitepoint
2008-09-29 Der Vorleser
2008-10-04 Matt Cutts: Gadgets, Google, and SEO
2008-10-05 Keinen Namen - keinen Titel
2008-10-05 KVIrc exec Alias unter Windows
2008-10-05 Mit Javascript externe Links in einem neuen Fenster &ouml;ffnen
2008-10-05 phpSQLiteCMS HTML Sitemap Smarty Template
2008-10-06 Weblog
2008-10-07 Print Style Sheet mit Druckvorschau
2008-10-10 Projekt Small Corporation
2008-10-11 456 Berea Street
2008-10-11 Project Euler
2008-10-13 Web Robots
2008-10-15 freiesMagazin
2008-10-15 MaxDesign
2008-10-18 Incutio CSS discuss Wiki
2008-10-19 Advance CSS Server Side parsed mit PHP
2008-10-19 phpSQLiteCMS HTML Sitemap Smarty Template mit Bl&auml;tter Funktion
2008-10-21 blog.html.it layoutgala
2008-10-24 A List Apart
2008-10-25 The Web Standarts Project
2008-10-30 Jakob Nielsen\'s Alert Box
2008-11-02 Dynamische Webseiten mit SSI Templates
2008-11-05 mezzoblue
2008-11-05 The Zen Garden
2008-11-08 Elemente anzeigen und verbergen mit Javascript
2008-11-11 Einfach f&uuml;r alle
2008-11-18 XWolf CGI/Perl und SSI
2008-11-22 QuirksMode
2008-11-26 meyerweb.com - Erik Meyer\'s Homepage
2008-12-17 belauscht.de
2008-12-17 M&uuml;nchner Kreis
2009-02-20 Liste von Open Source Content Management Systemen
2009-02-20 Todessto&szlig; f&uuml;r  IE6
2009-02-20 Was bietet CSS 3?
2009-02-20 Yahoo! - Best Practices for Speeding Up Your Web Site
2009-02-23 &lt;abbr&gt; vs &lt;acronym&gt;
2009-02-28 CSS float
2009-03-01 Opera Web Standards Curriculum
2009-03-23 fwpf-webdesign.de
2009-03-23 webtypography.net
2009-03-23 www.bitvtest.de
2009-03-29 Variables CSS-Layout mit verschiedenen Spaltenfarben
2009-03-31 Bundesministerium der Justiz - Leitfaden zur Impressumspflicht
2009-04-11 CSS Schriftgröße und Zeilenabstand
2009-04-11 HTML Farb- und Zeichenreferenzen
2009-04-28 15 Jahre Opera
2009-06-08 CSS Font Stacks
2009-06-08 DZone Code Snippets
2009-06-12 IBM Drupal/OpenSource Web design, develop and deploy Howto
2009-06-12 Top Ten Javavascript Snippets
2009-06-16 Internet Explorer CSS Bugs
2009-06-16 On having layout / Über hasLayout
2009-06-17 SOME  NOTES  ON  BOOKS  AND  PRINTING
2009-06-19 Conditional Comments that Work
2009-06-20 Professionelle Webentwicklung und Wartbarkeit
2009-06-22 Webseiten auf Mobiltelefonen Windows Mobile testen
2009-06-24 Eine (Wieder)Einführung in Javascript
2009-07-03 Language support in Apache through negotiation
2009-07-03 XHTML2 ist tot, es lebe HTML5
2009-07-11 Free HTML/CSS Templates viCard und Helvetica
2009-07-12 Arial gleich Helvetica?
2009-07-15 Law Podcasting - Anwalt-Audio-Blog
2009-07-19 Typographie für Webautoren
2009-07-19 Webfonts Demo und Testseiten
2009-07-20 Guidelines on alt texts in img elements
2009-08-02 CSS Schriftgrößenabgleich
2009-08-02 font-face embedding anhand der OpenType Schriftart Kaffeesatz
2009-08-03 Bitkom Umfrage
2009-08-16 Beispiel für kreative Webgestalltung
2009-08-16 Dropdown low down
2009-08-16 E-Lerningplattform Digital Media for Artists der Kunstuniversität Linz
2009-08-21 W3C Toolbox
2009-09-22 Google und  Keywords Metatags
2009-10-13 00000000mehr...main_menudefault.tpl111111002
009-10-23 W3C Website in neuem Design
2009-10-26 10 Jahre lyrikline.org
2009-11-01 Matthew James Taylor
2009-11-04 Explaining UX Research to Clients
2009-11-04 Richtlinien für barrierefreie Webinhalte (WCAG) 2.0
2010-01-27 Dive Into HTML5: Video on the Web
2010-02-07 Ten principles that contribute to a Googley user experience
2010-03-12 The Social Media Landscape
2010-03-13 Adrian Roselli Browser Archive
2010-03-17 @font-face Font KitsAlle font kits bestehen aus
2010-03-21 Skipfish - Web-Security-Scanner
2010-03-25 Datenschutz bei Onlinenetzwerken
2010-05-22 Browser-Support für HTML5 und CSS3
2010-05-22 Interessante Ausschreibungen für Kreative
2010-05-22 KommDesign Informationsarchitektur
2010-05-23 CKAN - Comprehensive Knowledge Archive Network
2010-05-25 See the Bigger Picture Album<a href=\"http://www.flickr.com/photos/michaelpaukner/sets/062367
2010-05-29 Jarlsberg: Web Application Exploits and Defenses
2010-07-08 Creative Commons und Public Domain Tools
2010-07-14 Microsoft's TrueType core fonts for the web
2010-07-28 W3C vereinheitlicht seine Validierungsdienste
2010-11-24 HTML Geo Tags
2010-12-07 Artikel 5 Grundgesetz
2011-01-18 Offizieles HTML5-Logo des W3C
2011-01-31 Microsoft veröffentlich Internet Explorer auf Virtual PC VHDs
2011-04-03 WHATWG HTML5 specification for web developers
```

{{ details(title="Let's break down the command step by step:", content=`

1. cat content.sqlite: This reads the content of the file named content.sqlite.
2. grep -a -o -E '([0-9]{10})(.\*)': Using grep with options:

   - -a: Treat binary files as text.
   - -o: Only output the matching part of the line.
   - -E: Interpret the pattern as an extended regular expression.
   - '([0-9]{10})(.\*)': This regular expression searches for a sequence of exactly 10 digits (representing UNIX timestamps) followed by any characters. It captures the timestamp and the rest of the line as separate parts.

3. awk '!seen[$1]++ { print strftime("%Y-%m-%d", $1) " " substr($0, 11) }':

   - awk: A powerful text processing tool.
   - '!seen[$1]++ { print strftime("%Y-%m-%d", $1) " " substr($0, 11) }': The awk command does the following:
   - !seen[$1]++: Uses an associative array seen indexed by the first captured group from grep (which is the UNIX timestamp). It ensures that only the first occurrence of each timestamp is considered.
   - strftime("%Y-%m-%d", $1): Converts the UNIX timestamp $1 to a human-readable date format (%Y-%m-%d).
   - substr($0, 11): Extracts the substring from the 11th character to the end of the line (excluding the timestamp). This represents the content after the timestamp.

4. sed -E 's/<[^>]+>//g; s/[0-9]{10}//g': sed command with two replacement expressions:

   - s/<[^>]+>//g: Removes HTML tags using a regular expression that matches any characters between < and >.
   - s/[0-9]{10}//g: Removes sequences of exactly 10 digits, i.e., UNIX timestamps.

5. sort: Sorts the output in ascending order.

Overall, this command chain extracts UNIX timestamps and content from the file, formats the timestamps to human-readable dates, removes HTML tags, removes the timestamps themselves, and finally sorts the output.
`)}}

[^1]: I think it is phpSQLiteCMS version 2.0.4. Because I did regular updates. But I have no proof for that. The CMS is still available on [SourceForge](https://sourceforge.net/projects/phpsqlitecms/). The project is abandoned since 2009.
[^redesign-v0.6]: I found a screenshot of the redesign v0.6 in my files. It was never finished.

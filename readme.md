# genius-blocker
This script attempts to block all attempts for Genius to provide annotations on the page.

## genius.it

If the referrer is genius.it it will redirect to [How New Genius Silences Writers](https://ellacydawson.wordpress.com/2016/03/25/how-news-genius-silences-writers/).

## bookmarklet

It overrides `HTMLElement.prototype.setAttribute` to prevent something with a URL containing `genius` from being set

## chrome extension

It installs a MutationObserver to watch the DOM.  If a node is added which matches `genius` it will subsequently remove that node from the DOM

## License
WTFPL (c) 2016 Todd Kennedy

do What The Fuck you want to Public License

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

Ok, the purpose of this license is simple
and you just

DO WHAT THE FUCK YOU WANT TO.

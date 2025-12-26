export function layout({ title, content }) {
  return /* html */ `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <header>
          <a href="/">LOGO</a>
        </header>
        <nav>
          <ul>
            <li>
              <a href="">radio + quiz</a>
            </li>
          </ul>
        </nav>
        <main>${content}</main>
        <footer>
          &copy; 2025 - All rights reserved.
        </footer>
      </body>
    </html>
  `;
}

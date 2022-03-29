export function printVersion(): void {
  console.log(
    `%c ${process.env.REACT_APP_NAME} %c${process.env.REACT_APP_VERSION} `,
    'color:#fff;background:rgb(89,89,89);height:20px;line-height:20px;border-top-left-radius:2px;border-bottom-left-radius:2px;',
    'color:#fff;background:rgb(8,121,185);padding-left:8px;height:20px;line-height:20px;border-top-right-radius:2px;border-bottom-right-radius:2px;'
  );
}

import { ButtonHTMLAttributes } from "react";
import s from "./Button.module.css";

type Props = {
  name: string;
  onclick: () => void;
  color?: string;
  disabled?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  color,
  name,
  children,
  disabled,
  onclick,
  ...restprops
}: Props) => {
  const OnClickHandler = () => {
    onclick();
  };
  //const finalClassName: string = s.button + " " +s.red

  //   const finalClassName = `${s.button} ${s.red}`;

  //   const finalClassName = `
  //   ${s.button}
  //   ${color==="red"?s.red:s.secondary}`;
  //   ${disabled ? s.disabled : ""}`;

  //   const finalClassName = s.button
  //   + (disabled
  //       ? ' ' + s.disabled
  //       : color === 'red'
  //           ? ' ' + s.red
  //           : color === 'secondary'
  //               ? ' ' + s.secondary
  //               : ' ' + s.default)
  //   + (className ? ' ' + className : '')

  const finalClassName = `
    ${s.button} 
    ${color === "red" ? s.red : color === "secondary" ? s.secondary : s.default}
    ${disabled ? s.disabled : ""}
    `;

  return (
    <button
      onClick={OnClickHandler}
      className={finalClassName}
      //   {...restprops}
    >
      {children}
    </button>
  );
};

//--------------------------------------------
// type Props = {
//   name: string;
//   onClick: () => void;
// };

// export const Button: React.FC<Props> = ({ name, onClick, ...restprops }) => {
//   onClick();
//   const OnClickHandler = () => {
//     console.log("clicked");
//   };
//   return <button onClick={OnClickHandler}>{name}</button>;
// };

//--------------------------------------------
// type Props = {
//     name : string
//     onClick : () => void
// }

// export const Button = (props: Props) => {
//     props.onClick()
//     const OnClickHandler = () => {
//         console.log('clicked')
//     }
//   return (
//  <button onClick={OnClickHandler}>{props.name}</button>

//     );

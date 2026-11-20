import { ComponentProps, useId} from "react";

type RadioProps = ComponentProps<"input">;

type RadioProops = {
  id?: string;
  name: string;
  option: string;
  desc?: string;
} & RadioProps;

const Radio = ({id, name, option, desc, ...props}: RadioProops) => {
  const randomId = useId();
  const radioId = id ?? randomId;

  return (
    <div className="radio">
      <input type="radio" id={radioId} name={name} {...props} />
      <label htmlFor={radioId}>
        <span className="option"></span>{option}
        <span className="option_desc">{desc}</span>
      </label>
    </div>
  )
}
export default Radio
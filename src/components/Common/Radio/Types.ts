export interface RadionProps {
  name: string;
  value: React.ReactText;
  className?: string;
  onChange: (e: any) => void;
}

export interface ControlledRadioProps extends RadionProps {
    checked: boolean;
}

export interface RadioGroupParam {
  value: string;
  title: string;
}

export interface RadioGroupProps {
  name: string,
  defaultValue?: string;
  params: RadioGroupParam[];
  className?: string;
  onChange: (e: any) => void;
}

export interface RadionProps {
  name: string;
  value: React.ReactText;
  className?: string;
  onChange: (e: any) => void;
}

export interface ControlledRadioProps extends RadionProps {
    checked: boolean;
}

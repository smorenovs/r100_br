interface DividerProps {
  num: string;
  label: string;
}

export function Divider({ num, label }: DividerProps) {
  return (
    <div className="divider">
      <div className="divider-inner">
        <div className="d-num">
          <span>{num}</span> {label} <span className="d-line"></span>
        </div>
        <hr />
      </div>
    </div>
  );
}

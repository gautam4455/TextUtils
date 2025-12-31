interface IAlertProps {
  alert: {
    type: string;
    message: string;
  } | null;
}

function Alert({ alert }: IAlertProps) {
  const capitalize = (word: string) => {
    const str = word.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    alert && (
      <div>
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
        >
          <strong>{capitalize(alert.type)}</strong> : {alert.message}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert"></button> */}
        </div>
      </div>
    )
  );
}

export default Alert;

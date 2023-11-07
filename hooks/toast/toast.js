export default function useToast() {
  let notifications;
  if (typeof document !== "undefined") {
    notifications = document.querySelector(".notifications");
  }
  const toastDetails = {
    timer: 5000,
    success: {
      icon: "fa-circle-check",
    },
    error: {
      icon: "fa-circle-xmark",
    },
    warning: {
      icon: "fa-triangle-exclamation",
    },
    info: {
      icon: "fa-circle-info",
    },
  };
  const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
  };
  const makeToast = (text, type) => {
    try {
      const { icon } = toastDetails[type];
      const toast = document.createElement("li");
      toast.className = `toast ${type}`;
      toast.innerHTML = `<div className="column">
                               <i className="fa-solid ${icon}"></i>
                               <span>${text}</span>
                            </div>`;
      notifications.appendChild(toast);
      toast.timeoutId = setTimeout(
        () => removeToast(toast),
        toastDetails.timer
      );
    } catch (er) {}
  };

  const makeSuccessToast = (text) => {
    makeToast(text, "success");
  };
  const makeErrorToast = (text) => {
    makeToast(text, "error");
  };
  const makeWarningToast = (text) => {
    makeToast(text, "warning");
  };
  const makeInfoToast = (text) => {
    makeToast(text, "info");
  };

  return { makeSuccessToast, makeErrorToast, makeWarningToast, makeInfoToast };
}

import { createContext } from 'react';

const toastMessageContext = createContext();

const ToastMessage = (props) => {

    // Show Toast Message
    const handleToastMessage = (message, color) => {
        var toastMessage = document.getElementById('toastMessage');
        // console.log(toastMessage.textContent);
        toastMessage.classList.add('offline-message-active');
        toastMessage.classList.add(`bg-${color}-dark`);
        toastMessage.textContent = message;

        setTimeout(function () {
            if (toastMessage) {
                toastMessage.classList.remove('offline-message-active');
                toastMessage.classList.remove(`bg-${color}-dark`);
            }
        }, 2000);
    }

    return (
        <>
            <toastMessageContext.Provider value={{ handleToastMessage }}>
                {props.children}
            </toastMessageContext.Provider>
            <p className="online-message shadow-bg shadow-bg-s color-white" id="toastMessage" >
                <i className="bi bi-wifi pe-2"></i>
                You are back online.
            </p>
        </>
    )
}

export default ToastMessage;
export { toastMessageContext };

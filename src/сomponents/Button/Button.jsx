//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { forwardRef } from 'react';

//-----style-----//
import './Button.scss';

const Button = forwardRef((props, ref) => {
    const { classes, type, children, handleClick } = props;

    return (
        <button
            ref={ref}
            type={type ? type : 'button'}
            className={classNames(classes, 'btn')}
            onClick={(e) => {
                if (type === 'submit') {
                    e.preventDefault();
                }
                handleClick(e);
            }}
        >
            {children}
        </button>
    );
});

export default Button;

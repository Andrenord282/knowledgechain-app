//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { forwardRef } from 'react';

//-----style-----//
import './Button.scss';

const Button = forwardRef((props, ref) => {
    const { classes, type, disabled, children, handleBlur, handleClick, ...othersProps } = props;

    return (
        <button
            {...othersProps}
            ref={ref}
            disabled={disabled}
            type={type ? type : 'button'}
            className={classNames(classes, 'btn')}
            onBlur={handleBlur}
            onClick={(e) => {
                if (!handleClick) {
                    return;
                }

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

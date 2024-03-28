import React, { ChangeEvent, useState} from "react";
import styles from "./FormInput.module.css";

/**
 * @param type is the type of the input
 */
export type FormInputProps = 
    {
        type: 'select';
        placeholder?: string;
        label: string;
        size: 'medium' | 'large';
        advise?: string;
        onChange: (e: ChangeEvent) => void;
        value: string;
        name: string;
        options: string[];
    };

const FormInput = ({
    type,
    label,
    onChange,
    value,
    advise,
    placeholder,
    size,
    name,
    options,
}: FormInputProps) => {
    return(
        <div className={styles.contenaire + ' ' + (size === 'medium' ? styles.medium : styles.large)}>
            {type === 'select' ? (
                <select className={styles.select}>
                {options.map((el, i) => {
                    return <option key={i}>{el}</option>;
                })}
                </select>
            ) : " "
            }
        </div>
    )
}

export default FormInput;
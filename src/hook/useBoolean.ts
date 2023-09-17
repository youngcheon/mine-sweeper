import {useCallback, useState} from 'react';

export default function useBoolean(initialState: boolean) {
    const [value, setValue] = useState<boolean>(initialState);

    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);
    const toggle = useCallback(() => setValue((x) => !x), []);

    return [value, toggle, setTrue, setFalse] as const;
}

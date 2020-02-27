import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    let test = 0;

    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e => {
        setNickname(e.target.value);
        test++;
    };

    useEffect(() => {
        console.log('effect', name);
        return () => {
            console.log('cleanup', name);
        }
    }, [name]);
    
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function kelipatan() {
    const [count,  setCount] = useState(0);

    return (
        <view>
            <text>
                Ayo Menghitung kelipatan 5  
            </text>
              <Button color = '#6495ED' title ='Mari Hitung, klik aku' onPress={() => setCount(count + 5)}/>
            <text>
                Hasil  = {count}
            </text>
            <Button color = '#FF7F50' title ='Ulangi hitung' onPress={() => setCount(5)}/>
           
        </view>
    );
}
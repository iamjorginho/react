import React from 'react';
import ReactDOM from 'react-dom/client';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { Padre } from './components/07-tarea-memo/Padre';


//import { MemoHook } from './components/06-memos/MemoHook';


//import { Memorize } from './components/06-memos/Memorize';
//import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { FormCustomHook } from './components/02-useEffect/FormCustomHook';
//import { Form } from './components/02-useEffect/Form';
//import { CounterCustomHook } from './components/01-useState/CounterCustomHook';

import './index.css';
//import CounterApp from './components/01-useState/CounterApp';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Padre/>
    </>
);


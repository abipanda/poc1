import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
// import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCountTwo from './components/HoverCountTwo';
import RenderProp from './components/RenderProp'
// import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
// import HookCounter from './components/HookCounter';
import HookCounterTwo from './Hooks/functional/HookCounterTwo';
import HookCounterThree from './components/Hooks/HookCounterThree';
import HookMouse from './components/Hooks/HookMouse';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import ClassCounter from './Hooks/class/ClassCounter';
import HookCounter from './Hooks/functional/HookCounter';
import Effect from './Hooks/class/Effect';
import EffectHook from './Hooks/functional/Effect';
import DataFetchWithEffect from './Hooks/functional/DataFetchWithEffect';
import ComponentC from './Hooks/functional/UseContext/ComponentC';
import CounterOne from './Hooks/functional/UseReducer/CounterOne';
import Counter from './Hooks/functional/UseMemo/Counter';
import FocusInput from './Hooks/functional/UseRef/FocusInput';
import DocTitleOne from './Hooks/functional/CustomHook/DocTitleOne';
import DocTitleTwo from './Hooks/functional/CustomHook/DocTitleTwo';
import ParentComponent from './Hooks/functional/UseCallback/ParentComponent';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <Message /> */}
      {/* <Greet name='Abinash'>Hello</Greet> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ClickCounter name="Abinash"></ClickCounter>
      <HoverCounter></HoverCounter> */}
      {/* <RenderProp>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </RenderProp>
      <RenderProp>
        {(count, incrementCount) => (
          <HoverCountTwo count={count} incrementCount={incrementCount} />
        )}
      </RenderProp> */}
      {/* <UserProvider value="Abinash">
        <ComponentC/>
      </UserProvider> */}
      {/* <PostList></PostList> */}
      {/* <PostForm></PostForm> */}
      {/* <HookCounter></HookCounter> */}

      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookMouse></HookMouse> */}
      {/* <CakeContainer></CakeContainer> */}
      {/* <ClassCounter></ClassCounter> */}

      {/* =========================================== */}
      {/* //React Hooks */}
      {/* ======================================= */}

      {/* //useState */}
      {/* <HookCounter></HookCounter>
      <HookCounterTwo></HookCounterTwo> */}

      {/* //useEffect */}
      {/* <Effect></Effect> */}
      {/* <EffectHook></EffectHook> */}
      {/* <DataFetchWithEffect></DataFetchWithEffect> */}

      {/* //useContext */}
      {/* <UserContext.Provider value={'Abinash'}>
        <ChannelContext.Provider value={'Hooks demo'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* //useReducer */}
      {/* <CounterOne></CounterOne> */}

      {/* //useMemo */}
      {/* <Counter></Counter> */}

      {/* //UseRef */}
      {/* <FocusInput></FocusInput> */}

      {/* //CustomHooks */}
      {/* <DocTitleOne></DocTitleOne>
      <DocTitleTwo></DocTitleTwo> */}

      {/* //useCallback */}
      <ParentComponent></ParentComponent>
    </div>
    // </Provider>
  );
}

export default App;
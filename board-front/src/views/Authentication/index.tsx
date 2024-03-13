import React, { useState } from 'react';
import './style.css';

//        component: 인증 화면 컴포넌트         //
export default function Authentication() {

  //        state: 화면상태                      //
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');
  //        component: 인증 화면 컴포넌트         //
  const SignInCard = () => {

    //        render: SignInCard 컴포넌트 렌더링        //
    return(
      <div className='auth-card'></div>
    )
  };
  //        component: 인증 화면 컴포넌트         //
  const SignUpCard = () => {

    //        render: SignUpCard 컴포넌트    렌더링     //
    return(
      <div className='auth-card'></div>
    )
  };
  //        render: 인증 화면 컴포넌트         //
  return (
    <div id = 'auth-wrapper'>
      <div className='auth-container'>
        <div className='auth-jumbotron-box'>
          <div className='auth-jombotron-contents'>
            <div className='auth-logo-icon'></div>
            <div className='auth-jumbotron-text-box'>
              <div className='auth-jumbotron-text'>{'환영합니다.'}</div>
              <div className='auth-jumbotron-text'>{'Gyus Board입니다.'}</div>
            </div>
          </div>
        </div>
        {view === 'sign-in' && <SignInCard />}
        {view === 'sign-up' && <SignUpCard />}
        </div>
    </div>
  )
}

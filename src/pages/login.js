// src/pages/login.js
import dynamic from 'next/dynamic';

const Login = dynamic(() => import('./components/Login'), { ssr: false });

export default Login;

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton () {
    const [session] = useSession();
    
    return session ? (
        <button 
            className={styles.signInButton} 
            type="button"
            onClick={()=> signOut()}
        >
            <FaGithub color="#04D361"/>
            {session.user.name}
            <FiX className={styles.closeIcon} />
        </button>
    ) : (
        <button 
            className={styles.signInButton} 
            type="button" 
            onClick={()=> signIn('github')}
        >
            <FaGithub color="#EBA417"/>Sign in with Github
        </button>
    )
}
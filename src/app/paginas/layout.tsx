import { Footer } from '@/components/footer';
import Nav from '@/components/nav/Nav';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => (
    <div >
        <Nav />
        {children}
        <Footer />
    </div>
);

export default layout
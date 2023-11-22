import { PrimeReactProvider } from 'primereact/api';


const PrimeReactWrapper = ({ children }: { children: React.ReactNode; }) => {
  return (
    <PrimeReactProvider>
      {children}
    </PrimeReactProvider>
  );
}

export default PrimeReactWrapper;

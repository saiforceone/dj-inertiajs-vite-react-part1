const Layout = ({ children }) => {
 return (
   <main>
     <div>{children}</div>
   </main>
 );
};

export default (page) => <Layout>{page}</Layout>;

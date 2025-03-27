interface DefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
    return (
        <div className="default-layout">
            <header className="default-layout-header">
                <h1>Default Layout</h1>
            </header>
            <main className="default-layout-content">{props.children}</main>
            <footer className="default-layout-footer">
                <p>&copy; 2023 Default Layout</p>
            </footer>
        </div>
    );
}
export default DefaultLayout;
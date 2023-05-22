
type LayoutProps = {
  children: React.ReactNode,
};

function BaseLayout({ children }: LayoutProps) {
  return (
    <main>{ children }</main>
  )
}

export default BaseLayout
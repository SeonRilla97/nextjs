// 여러 페이지가 공유하는 레이아웃
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout( {children} : {children : React.ReactNode}){ //또다른 Layout, 아니면 동일 위치의 page.tsx
    return(
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav /> 
        </div>

        {/* partial Rendering : layout 랜더링 안하고 page component만 랜더링 */}
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> 
      </div>
    );
}
// quartz/components/Busuanzi.tsx
import { QuartzComponent, QuartzComponentProps } from "./types"

export default (() => {
  function Busuanzi({ displayClass }: QuartzComponentProps) {
    return (
      <div class={`busuanzi ${displayClass ?? ""}`}>
        {/* 引入不蒜子脚本 */}
        <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
        
        {/* --- 站点总访问量 (英文版) --- */}
        <span id="busuanzi_container_site_pv" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
          Total Views: <span id="busuanzi_value_site_pv"></span>
        </span>

        {/* 
          如果你想显示“访客数”(UV) 而不是“阅读量”(PV)，
          可以把上面的 site_pv 换成 site_uv，如下：
          Visitors: <span id="busuanzi_value_site_uv"></span> 
        */}
      </div>
    )
  }

  return Busuanzi
}) satisfies QuartzComponent

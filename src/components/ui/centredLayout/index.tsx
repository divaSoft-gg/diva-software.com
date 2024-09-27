import { ReactNode } from "react"

const CentredLayout = ({children} : {children : ReactNode})=>{


    return(
        <div className="max-w-[var(--max-content-width)] mx-auto">
            {children}
        </div>
    )
}

export default CentredLayout
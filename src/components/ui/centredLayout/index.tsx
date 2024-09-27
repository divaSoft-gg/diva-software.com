import { ReactNode } from "react"

const CentredLayout = ({children} : {children : ReactNode})=>{


    return(
        <div className="max-w-[1200px] mx-auto">
            {children}
        </div>
    )
}

export default CentredLayout
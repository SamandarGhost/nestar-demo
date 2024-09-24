import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";


const Community: NextPage = () => {
    console.log('COMMUNITY COMPONENT - PAGES ROUTING');

    const [title, stateTitle] = useState<string>('hello');

    return <div>
        Community{''}
        <button onClick={() => alert('Hello Sam')} style={{ margin: '35px' }}>
            Button
        </button>
    </div>
}

export default withLayoutBasic(Community);
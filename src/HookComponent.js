import React from 'react'

export default function Hook_component() {
    const graphs = {{graphJSON | safe}};
    const ids = {{ids | safe}};
    for(let i in graphs) {
        Plotly.plot(ids[i], graphs[i].data, graphs[i].layout);
    }
    console.log('graphs rendered');
    return (
        <div>
            
        </div>
    )
}

// import { color } from "@mui/system"

let color =  {
    lightBlue: '#B1D0E0',
    mdBlue: '#6998AB',
    darkBlue: '#406882',
    darkestBlue: '#1A374D'
}

let style:any = {
    outerBox: {
        maxHeight: 388,
        width: 400,
        paddingTop: '5px',
        paddingBottom: '30px',
        backgroundColor: color.darkestBlue,
        margin: '5px 5px'
    },
    innerBox: {
        height: 310,
        width: 390,
        margin: 'auto'
    },
    header: {
        textAlign: 'center' as 'center',
        color: color.darkestBlue
    },
    button: {
        light: {
            color: '#B1D0E0',
            backgroundColor: color.darkBlue,
            border: `1px solid ${color.lightBlue}`
        },
        dark: {
            backgroundColor: color.lightBlue,
            border: `1px solid ${color.darkBlue}`
        }
    }
}

export {style}
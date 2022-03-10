// import { color } from "@mui/system"

let color =  {
    lightBlue: '#B1D0E0',
    mdBlue: '#6998AB',
    darkBlue: '#406882',
    darkestBlue: '#1A374D'
}

let style = {
    outerBox: {
        maxHeight: 388,
        width: 400,
        paddingTop: '5px',
        paddingBottom: '30px',
        backgroundColor: color.darkBlue,
        margin: '5px 5px'
    },
    innerBox: {
        height: 310,
        width: 390,
        margin: 'auto'
    },
    header: {
        textAlign: 'center',
        color: color.darkestBlue
    },
    button: {
        light: {
            backgroundColor: color.lightBlue,
            border: `1px solid ${color.darkBlue}`
        },
        dark: {
            color: color.lightBlue,
            backgroundColor: color.darkBlue,
            border: `1px solid ${color.lightBlue}`
        }
    }
}

export {style}
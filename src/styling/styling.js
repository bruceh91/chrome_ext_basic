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
            width: '100%',
            color: color.darkBlue,
            backgroundColor: color.lightBlue,
            border: `1px solid ${color.darkBlue}`
        },
        dark: {
            color: color.lightBlue,
            backgroundColor: color.darkBlue,
            border: `1px solid ${color.lightBlue}`
        },
        thin: {
            height: '1.25rem',
            fontSize: '16px',
            justifyContent: 'flex-start'
        }
    },
    grid: {
        item: {
            fullWidth: {
                width: '90%'
            },
            weekGrid: {
                // paddingTop: '5px',
                width: '75%'
            }
        }
    }
}

export {style}
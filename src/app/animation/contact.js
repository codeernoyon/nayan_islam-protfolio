export const contactAnimation ={
    contentAnimation:{
        start:{
            y: 200,
            opacity: 0
        },
        end:{
            y:0,
            opacity:1,
            transition: {
                type: 'spring', stiffness: 100, duration: 1, delay: .5,
              }
        }
    }
}
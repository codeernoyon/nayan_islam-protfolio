export const aboutAnimation ={
    content:{
        start:{
            y:100,
            opacity:0,
            transition: {
                type: 'spring', stiffness: 100, duration: .2, delay: 0,
              }
        },
        end:{
            y:0,
            opacity:1,
            transition: {
                type: 'spring', stiffness: 100 , duration: 1, delay: .5
              }
        }
    },
    imageAnimation:{
        start:{
            x:50,
            opacity:0,
            transition: {
                type: 'spring', stiffness: 100, duration: .2, delay: 0,
              }
        },
        end:{
            x:0,
            opacity:1,
            transition: {
                type: 'spring', stiffness: 100 , duration: 1, delay: 1
              }
        }
    },
    serviceCard:{
        start:{
            x:-20,
            opacity:0
        },
        end:{
            x:0,
            opacity:1,
            transition:{
                duration: 1,
                delay:.5
            }
        }
    }
}
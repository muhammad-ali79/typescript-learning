// we use enums where we want same type of constants so that change it (constants can also be string)
// e.g is he adult and not 
// e.g is he male and female
// e.g is he gamer or not
// e.g what is the current state of order that you place like shipped , shipping , returned
// 7 days of week (each one has ordered numbers)
// payments methods (paypal, razorpay, stripe , jazzcash)

/* enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
}
 */

// its always better to place const ,let
const enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
}


const seat:SeatChoice = SeatChoice.MIDDLE


const aliSeat= SeatChoice.WINDOW
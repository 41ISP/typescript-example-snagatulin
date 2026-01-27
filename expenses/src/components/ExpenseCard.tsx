export const ExpenseCard = () => {
    return(
<div>

   <div className="expense">
        <div>
            Lunch
            <div className="category">Food</div>
        </div>
        <div className="amount">$12.50</div>
    </div>

    <div className="expense">
        <div>
            Bus Ticket
            <div className="category">Transport</div>
        </div>
        <div className="amount">$5.00</div>
    </div>

    <div className="expense">
        <div>
            Movie
            <div className="category">Fun</div>
        </div>
        <div className="amount">$25.00</div>
    </div>

</div>
    )
}


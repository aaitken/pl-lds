content = PLP.namespace('content')

content['expenses-table'] = {
  tips: [
    """These values represent the current year's average budgeted operating expense amounts.  If necessary, you may override the auto-populated current year amounts using the 'Override' button.  NOTE - you should NOT use the override button to input stop amounts from a different base year.  You should do this in the Stop Amount column.""" 
    """If the operating expense is recoverable in a way OTHER THAN through rent charges, select "Yes".  If the operating expense is not recoverable OR is only recoverable through rent charges, select "No".""" 
    """Expense Stop will default to "Yes", which means that the system will reference the value in the Stop Amount column for all proposed calculations. If Expense Stop is set to "No", the system will reference the value in the Current Yr. Avg. Budgeted OpEx Amount column.""" 
    """These values will auto-populate with the current year's average budgeted operating expense amounts.  If necessary, you may edit the values to input different stop amounts (for example, stops from a different base year).  You may indicate the Base Year in the provided field for additional reference.""" 
    """If you have negotiated a cap on controllable operating expenses, select "Yes".  You may include comments about the cap in the Expenses Comments box.  If you have not negotiated a cap on controllable operating expenses, select "No"."""]
  tbody: [
    ['Common Area Maintenance', '0.0000']
    ['Insurance', '1.0000']
    ['Property Taxes', '5.0000']
    ['Utilities', '3.0000']
    ['Management Fees', '0.0000']
    ['Amortized CAM Recoveries', '0.0000']
    ['Tarmac', '0.0000']]}

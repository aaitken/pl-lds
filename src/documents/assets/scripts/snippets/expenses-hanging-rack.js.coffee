snippets = PLP.namespace('snippets')

snippets['expenses-hanging-rack'] = """
  <h1 class="slds-text-heading--small slds-m-bottom--medium" style="font-weight:regular">Settings and Selections</h1>
  <form class="slds-form--inline slds-m-bottom--medium">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="name">Expense Base Year</label>
      <div class="slds-form-element__control">
        <input id="name" class="slds-input" type="text" />
      </div>
    </div>
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="email">Lease Type</label>
      <div class="slds-form-element__control">
        <div class="slds-select_container">
          <select id="select-01" class="slds-select">
            <option>Gross</option>
            <option>mgpm</option>
            <option>modgross</option>
            <option>nnn</option>
            <option>nnnpm</option>
          </select>
        </div>
      </div>
    </div>
  </form>
  <table id="expenses-table" class="slds-m-bottom--x-large slds-table slds-table--bordered slds-no-row-hover">
    <thead data-view="expenses-table-head" id="expenses-table-head">
      <tr class="slds-text-heading--label">
        <th width="25%" valign="top">
          <div class="slds-truncate"><span>Expense Category</span></div>
        </th>
        <th width="17%" valign="top">
          <div class="slds-truncate"><span>Budgeted</span><br><span>OpEx</span></div>
        </th>
        <th width="14.5%" valign="top">
          <div class="slds-truncate"><span>Recoverable</span><br>Outside Rent</div>
        </th>
        <th width="14.5%" valign="top">
          <div class="slds-truncate"><span>Expense Stop</span></div>
        </th>
        <th width="14.5%" valign="top">
          <div class="slds-truncate"><span>Stop Amount</span></div>
        </th>
        <th width="14.5%" valign="top">
          <div class="slds-truncate"><span>Cap</span></div>
        </th>
      </tr>
    </thead>
    <tbody id="expenses-table-body">
      <tr style="height: 49px">
        <td class="slds-text-heading--label">OpEx and Stop Totals</td>
        <td>100</td>
        <td></td>
        <td></td>
        <td>100000</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h1 class="slds-text-heading--small slds-m-bottom--medium" style="font-weight:regular">Comments</h1>
  <div class="slds-form-element">
    <div class="slds-form-element__control">
      <textarea class="slds-textarea" placeholder="Add expense comments here."></textarea>
    </div>
  </div>
  """

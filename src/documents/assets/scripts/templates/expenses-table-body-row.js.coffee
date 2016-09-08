templates = PLP.namespace('templates')

templates['expenses-table-body-row'] = """
  <tr>
    <td><div class="slds-truncate"><%= content[0] %></div></td>
    <td><div class="slds-truncate"><%= content[1] %></div></td>
    <td><div class="slds-truncate"></div></td>
    <td><div class="slds-truncate"></div></td>
    <td><div class="slds-truncate"></div></td>
    <td><div class="slds-truncate"></div></td>
  </tr>
  """
  

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellTransactionFormComponent } from './containers/shell-transaction-form/shell-transaction-form.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellTransactionFormComponent, TransactionFormComponent],
  exports: [ShellTransactionFormComponent],
})
export class EasyStreetDashboardFeatureTransactionsModule {}

import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/core/home/Home';
import { InvoiceView } from './components/invoice/InvoiceView';
import { InvoiceEditView } from './components/invoice/InvoiceEditView';
import { InvoiceCreateView } from './components/invoice/InvoiceCreateView';

export const Router = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/invoices/0" />
			</Route>
			<Route exact path="/invoices/:pageIndex" component={Home} />
			<Route exact path="/invoice/create" component={InvoiceCreateView} />
			{/* '/invoice/create/:id will match with IncvoiceEditView so make checks before rendering' */}
			<Route exact path="/invoice/:invoiceId" component={InvoiceView} />
			<Route exact path="/invoice/:invoiceId/edit" component={InvoiceEditView} />
		</Switch>
	);
};

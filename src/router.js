import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/core/home/Home';
import { InvoiceView } from './components/invoice/InvoiceView';
import { InvoiceForm } from './components/invoice/InvoiceForm';
import { Auth } from './components/auth/Auth';

export const Router = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/invoices/1" />
			</Route>
			<Route exact path="/invoices/:pageIndex" component={Home} />
			<Route exact path="/invoice/create" component={InvoiceForm} />
			{/* '/invoice/create/:id will match with IncvoiceEditView so make checks before rendering' */}
			<Route exact path="/invoice/:invoiceId" component={InvoiceView} />
			<Route exact path="/invoice/:invoiceId/edit" component={InvoiceForm} />
			<Route exact path="/login" component={Auth} />
			<Route exact path="/signup" component={Auth} />
		</Switch>
	);
};

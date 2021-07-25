import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/core/home/Home';
import { InvoiceView } from './components/invoice/View/InvoiceView';
import { InvoiceForm } from './components/invoice/InvoiceForm';
import { Auth } from './components/auth/Auth';
import { useSelector } from 'react-redux';

export const Router = () => {
	const user = useSelector((state) => state.auth.user);
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/invoices/1" />
			</Route>
			<Route exact path="/invoices/:pageIndex">
				{user ? <Home /> : <Redirect to="/login" />}
			</Route>
			<Route exact path="/invoice/create">
				{/* '/invoice/create/:id will match with IncvoiceEditView so make checks before rendering' */}
				{user ? <InvoiceForm /> : <Redirect to="/login" />}
			</Route>
			<Route exact path="/invoice/:invoiceId">
				{user ? <InvoiceView /> : <Redirect to="/login" />}
			</Route>
			<Route exact path="/invoice/:invoiceId/edit">
				{user ? <InvoiceForm /> : <Redirect to="/login" />}
			</Route>
			<Route exact path="/login">
				{!user ? <Auth /> : <Redirect to="/" />}
			</Route>
			<Route exact path="/signup">
				{!user ? <Auth /> : <Redirect to="/" />}
			</Route>
		</Switch>
	);
};

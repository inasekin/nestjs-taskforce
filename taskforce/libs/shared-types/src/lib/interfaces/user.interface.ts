import { UserContractor } from './user-contractor.interface';
import { UserCustomer } from './user-customer.interface';

export interface User extends UserCustomer, UserContractor {}

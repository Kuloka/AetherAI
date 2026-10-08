-- Read-only: run in Supabase SQL Editor. This does not return user data.
select n.nspname as schema_name,c.relname as table_name,c.relrowsecurity as rls_enabled,c.relforcerowsecurity as rls_forced
from pg_class c join pg_namespace n on n.oid=c.relnamespace
where n.nspname='public' and c.relkind in ('r','p');
select schemaname,tablename,policyname,roles,cmd,qual,with_check
from pg_policies where schemaname='public';
select table_name,grantee,privilege_type from information_schema.role_table_grants
where table_schema='public' and grantee in ('anon','authenticated','PUBLIC');
-- Review exposed SECURITY DEFINER functions separately; table RLS cannot secure arbitrary RPCs.
select n.nspname as schema_name,p.proname as function_name,p.prosecdef as security_definer
from pg_proc p join pg_namespace n on n.oid=p.pronamespace
where n.nspname='public' and p.prosecdef;
